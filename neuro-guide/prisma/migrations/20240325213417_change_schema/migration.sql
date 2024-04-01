/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `UserResponse` (
    `userID` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `Question1` INTEGER NOT NULL,
    `Question2` INTEGER NOT NULL,
    `Question3` INTEGER NOT NULL,
    `Question4` INTEGER NOT NULL,
    `Question5` INTEGER NOT NULL,
    `Question6` INTEGER NOT NULL,
    `Question7` INTEGER NOT NULL,
    `Question8` INTEGER NOT NULL,
    `Diagnosis` INTEGER NOT NULL,

    UNIQUE INDEX `UserResponse_username_key`(`username`),
    PRIMARY KEY (`userID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
