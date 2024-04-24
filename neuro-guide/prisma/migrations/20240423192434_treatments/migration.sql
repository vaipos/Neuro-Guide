/*
  Warnings:

  - The required column `s10` was added to the `Treatments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `s4` was added to the `Treatments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `s5` was added to the `Treatments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `s6` was added to the `Treatments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `s7` was added to the `Treatments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `s8` was added to the `Treatments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `s9` was added to the `Treatments` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `Treatments` ADD COLUMN `s10` VARCHAR(1000) NOT NULL,
    ADD COLUMN `s4` VARCHAR(1000) NOT NULL,
    ADD COLUMN `s5` VARCHAR(1000) NOT NULL,
    ADD COLUMN `s6` VARCHAR(1000) NOT NULL,
    ADD COLUMN `s7` VARCHAR(1000) NOT NULL,
    ADD COLUMN `s8` VARCHAR(1000) NOT NULL,
    ADD COLUMN `s9` VARCHAR(1000) NOT NULL;
