/*
  Warnings:

  - You are about to alter the column `name` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `address` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `Invoice` MODIFY `name` VARCHAR(50) NOT NULL,
    MODIFY `address` VARCHAR(100) NOT NULL,
    MODIFY `phone` TEXT NOT NULL;
