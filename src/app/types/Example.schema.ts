import { z } from 'zod';
import { ZodInferSchema } from 'app/utils/zodInferSchema';

type Example = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
};

export type PartialExample = Partial<
  Omit<Example, 'id' | 'createdAt' | 'updatedAt'>
>;

export type ExampleSchema = ZodInferSchema<PartialExample>;

export type OmitExample = Omit<Example, 'id' | 'createdAt' | 'updatedAt'>;

export type ExampleSchema2 = ZodInferSchema<OmitExample>;

export const exampleSchema = z.object<ExampleSchema>({
  name: z.string().optional(),
  description: z.string().optional(),
});

export const exampleSchema2 = z.object<ExampleSchema2>({
  name: z.string(),
  description: z.string(),
});
