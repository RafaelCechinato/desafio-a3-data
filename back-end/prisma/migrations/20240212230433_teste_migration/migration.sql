-- CreateTable
CREATE TABLE "exemplo" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50),
    "idade" INTEGER,

    CONSTRAINT "exemplo_pkey" PRIMARY KEY ("id")
);
