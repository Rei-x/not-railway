-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "deploymentName" TEXT,
    "projectId" INTEGER NOT NULL,
    "subdomain" TEXT NOT NULL,
    "builder" TEXT NOT NULL DEFAULT 'nixpacks',
    "githubRepoUrl" TEXT,
    "dockerImageUrl" TEXT,
    "envVars" TEXT NOT NULL,
    "port" INTEGER NOT NULL DEFAULT 80,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Service_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("builder", "createdAt", "deploymentName", "dockerImageUrl", "envVars", "githubRepoUrl", "id", "name", "port", "projectId", "subdomain", "updatedAt") SELECT "builder", "createdAt", "deploymentName", "dockerImageUrl", "envVars", "githubRepoUrl", "id", "name", "port", "projectId", "subdomain", "updatedAt" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
