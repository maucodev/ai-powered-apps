import { FaArrowUp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Button } from '../ui/button';
import { useRef, useState } from 'react';
import TypingIndicator from './TypingIndicator';
import type { Message } from './ChatMessages';
import ChatMessages from './ChatMessages';

type FormData = {
    prompt: string;
};

type ChatResponse = {
    message: string;
};

const ChatBox = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [error, setError] = useState('');
    const conversationId = useRef(crypto.randomUUID());
    const { register, handleSubmit, reset, formState } = useForm<FormData>();

    const onSubmit = async ({ prompt }: FormData) => {
        try {
            prompt = prompt.trim();

            setMessages((prev) => [...prev, { content: prompt, role: 'user' }]);

            setIsBotTyping(true);

            setError('');

            reset({ prompt: '' });

            const { data } = await axios.post<ChatResponse>('/api/chat', {
                prompt: prompt,
                conversationId: conversationId.current,
            });

            setMessages((prev) => [
                ...prev,
                { content: data.message, role: 'bot' },
            ]);
        } catch (error) {
            console.error(error);
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsBotTyping(false);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(onSubmit)();
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
                <ChatMessages messages={messages} />
                {isBotTyping && <TypingIndicator />}
                {error && (
                    <div className="text-red-600 font-medium text-center">
                        {error}
                    </div>
                )}
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                onKeyDown={onKeyDown}
                className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
            >
                <textarea
                    {...register('prompt', {
                        required: true,
                        validate: (data) => data.trim().length > 0,
                    })}
                    autoFocus
                    className="w-full border-0 focus:outline-0 resize-none"
                    placeholder="Ask anything"
                    maxLength={1000}
                />
                <Button
                    disabled={!formState.isValid}
                    className="rounded-full w-9 h-9 cursor-pointer"
                >
                    <FaArrowUp />
                </Button>
            </form>
        </div>
    );
};

export default ChatBox;
