'use server';
/**
 * @fileOverview An AI study companion that explains complex concepts or exam questions in simple terms.
 *
 * - aiStudyCompanionExplanation - A function that handles the explanation process.
 * - AIStudyCompanionExplanationInput - The input type for the aiStudyCompanionExplanation function.
 * - AIStudyCompanionExplanationOutput - The return type for the aiStudyCompanionExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIStudyCompanionExplanationInputSchema = z.object({
  examQuestionOrConcept: z
    .string()
    .describe('The complex exam question or concept to be explained.'),
});
export type AIStudyCompanionExplanationInput = z.infer<
  typeof AIStudyCompanionExplanationInputSchema
>;

const AIStudyCompanionExplanationOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A simple, easy-to-understand explanation of the concept.'),
});
export type AIStudyCompanionExplanationOutput = z.infer<
  typeof AIStudyCompanionExplanationOutputSchema
>;

export async function aiStudyCompanionExplanation(
  input: AIStudyCompanionExplanationInput
): Promise<AIStudyCompanionExplanationOutput> {
  return aiStudyCompanionExplanationFlow(input);
}

const aiStudyCompanionExplanationPrompt = ai.definePrompt({
  name: 'aiStudyCompanionExplanationPrompt',
  input: {schema: AIStudyCompanionExplanationInputSchema},
  output: {schema: AIStudyCompanionExplanationOutputSchema},
  prompt: `You are an AI study assistant specifically designed for ASTU students. Your task is to explain complex concepts or answer challenging exam questions in simple, easy-to-understand terms. Focus on clarity and conciseness, breaking down the topic so an ASTU student can quickly grasp it.

Explain the following:
Concept/Question: {{{examQuestionOrConcept}}}`,
});

const aiStudyCompanionExplanationFlow = ai.defineFlow(
  {
    name: 'aiStudyCompanionExplanationFlow',
    inputSchema: AIStudyCompanionExplanationInputSchema,
    outputSchema: AIStudyCompanionExplanationOutputSchema,
  },
  async input => {
    const {output} = await aiStudyCompanionExplanationPrompt(input);
    return output!;
  }
);
