import { auth } from "@clerk/nextjs";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AINotes",
};

export default async function NotesPage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note?.findMany({ where: { userId } });

  return <div>{JSON.stringify(allNotes)}</div>;
}
