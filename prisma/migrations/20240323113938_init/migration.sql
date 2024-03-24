-- CreateTable
CREATE TABLE "trn_student" (
    "student_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "skype_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "contract_type" INTEGER NOT NULL DEFAULT 0,
    "rank_id" INTEGER NOT NULL,
    "level_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "trn_student_skype_name_key" ON "trn_student"("skype_name");

-- CreateIndex
CREATE UNIQUE INDEX "trn_student_email_key" ON "trn_student"("email");
