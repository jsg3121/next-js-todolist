-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "writer" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "create_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "User"("user_email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_writer_fkey" FOREIGN KEY ("writer") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
