/*
  Warnings:

  - You are about to drop the column `domain` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Deployment` table. All the data in the column will be lost.
  - Added the required column `deploymentName` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `envVars` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subdomain` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buildStatus` to the `Deployment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "deploymentName" TEXT NOT NULL,
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
INSERT INTO "new_Service" ("builder", "createdAt", "dockerImageUrl", "githubRepoUrl", "id", "name", "port", "projectId", "updatedAt") SELECT "builder", "createdAt", "dockerImageUrl", "githubRepoUrl", "id", "name", "port", "projectId", "updatedAt" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE TABLE "new_Deployment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serviceId" INTEGER NOT NULL,
    "buildStatus" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "pipelineName" TEXT NOT NULL,
    "dockerImageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Deployment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Deployment" ("createdAt", "dockerImageUrl", "id", "isActive", "pipelineName", "serviceId", "updatedAt") SELECT "createdAt", "dockerImageUrl", "id", "isActive", "pipelineName", "serviceId", "updatedAt" FROM "Deployment";
DROP TABLE "Deployment";
ALTER TABLE "new_Deployment" RENAME TO "Deployment";
CREATE UNIQUE INDEX "Deployment_pipelineName_key" ON "Deployment"("pipelineName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
