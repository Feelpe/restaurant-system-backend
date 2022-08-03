-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mesa" (
    "id" TEXT NOT NULL,
    "mesaNumber" TEXT NOT NULL,
    "userId" TEXT,
    "menuId" TEXT NOT NULL,

    CONSTRAINT "mesa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MenuToOption" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_MenuToOption_AB_unique" ON "_MenuToOption"("A", "B");

-- CreateIndex
CREATE INDEX "_MenuToOption_B_index" ON "_MenuToOption"("B");

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mesa" ADD CONSTRAINT "mesa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mesa" ADD CONSTRAINT "mesa_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuToOption" ADD CONSTRAINT "_MenuToOption_A_fkey" FOREIGN KEY ("A") REFERENCES "menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuToOption" ADD CONSTRAINT "_MenuToOption_B_fkey" FOREIGN KEY ("B") REFERENCES "option"("id") ON DELETE CASCADE ON UPDATE CASCADE;
