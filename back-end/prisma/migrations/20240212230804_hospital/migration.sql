/*
  Warnings:

  - You are about to drop the `exemplo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "exemplo";

-- CreateTable
CREATE TABLE "Procedures" (
    "code" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Procedures_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "code" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Rooms" (
    "code" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "floor" TEXT NOT NULL,
    "block" TEXT NOT NULL,

    CONSTRAINT "Rooms_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "SurgicalRequest" (
    "code" SERIAL NOT NULL,
    "doctor" TEXT NOT NULL,
    "pacient" TEXT NOT NULL,
    "dateSurgical" TIMESTAMP(3) NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL,
    "observations" VARCHAR(100) NOT NULL,

    CONSTRAINT "SurgicalRequest_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "_proceduresOnSurgicalRequest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Procedures_name_key" ON "Procedures"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_name_key" ON "Hospital"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Rooms_number_key" ON "Rooms"("number");

-- CreateIndex
CREATE UNIQUE INDEX "_proceduresOnSurgicalRequest_AB_unique" ON "_proceduresOnSurgicalRequest"("A", "B");

-- CreateIndex
CREATE INDEX "_proceduresOnSurgicalRequest_B_index" ON "_proceduresOnSurgicalRequest"("B");

-- AddForeignKey
ALTER TABLE "_proceduresOnSurgicalRequest" ADD CONSTRAINT "_proceduresOnSurgicalRequest_A_fkey" FOREIGN KEY ("A") REFERENCES "Rooms"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_proceduresOnSurgicalRequest" ADD CONSTRAINT "_proceduresOnSurgicalRequest_B_fkey" FOREIGN KEY ("B") REFERENCES "SurgicalRequest"("code") ON DELETE CASCADE ON UPDATE CASCADE;
