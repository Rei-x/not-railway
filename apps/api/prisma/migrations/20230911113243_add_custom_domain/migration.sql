/*
  Warnings:

  - Added the required column `domain` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "domain" TEXT NOT NULL,
    "builder" TEXT NOT NULL DEFAULT 'nixpacks',
    "githubRepoUrl" TEXT,
    "dockerImageUrl" TEXT,
    "port" INTEGER NOT NULL DEFAULT 80,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Service_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("builder", "createdAt", "dockerImageUrl", "githubRepoUrl", "id", "name", "port", "projectId", "updatedAt") SELECT "builder", "createdAt", "dockerImageUrl", "githubRepoUrl", "id", "name", "port", "projectId", "updatedAt" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
