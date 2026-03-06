-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Add embedding columns to Job table
ALTER TABLE "Job" ADD COLUMN IF NOT EXISTS embedding vector(1536);

-- Add embedding columns to CandidateProfile table
ALTER TABLE "CandidateProfile" ADD COLUMN IF NOT EXISTS embedding vector(1536);

-- Create index for vector similarity search on Job
CREATE INDEX IF NOT EXISTS "Job_embedding_idx" ON "Job" USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- Create index for vector similarity search on CandidateProfile
CREATE INDEX IF NOT EXISTS "CandidateProfile_embedding_idx" ON "CandidateProfile" USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
