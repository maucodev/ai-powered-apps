import fs from 'fs';
import path from 'path';

import { conversationRespository } from '../repositories/conversation.repository';
import template from '../prompts/chatbox.txt';
import { llmClient } from '../llm/client';

const parkInfo = fs.readFileSync(
    path.join(__dirname, '..', 'prompts', 'WonderWorld.md'),
    'utf-8'
);

const instructions = template.replace('{{PARK_INFO}}', parkInfo);

type ChatResponse = {
    id: string;
    message: string;
};

export const chatService = {
    async sendMessage(
        prompt: string,
        conversationId: string
    ): Promise<ChatResponse> {
        const response = await llmClient.generateText({
            model: 'gpt-4o-mini',
            instructions,
            prompt,
            temperature: 0.2,
            maxTokens: 100,
            previousResponseId:
                conversationRespository.getLastResponseId(conversationId),
        });

        conversationRespository.setLastResponseId(conversationId, response.id);

        return {
            id: response.id,
            message: response.text,
        };
    },
};
