ALTER TABLE "Note"
  ADD COLUMN "isPublic" BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX "Note_isPublic_createdAt_idx"
  ON "Note"("isPublic", "createdAt");
