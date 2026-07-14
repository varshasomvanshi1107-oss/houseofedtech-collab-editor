import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { title, content, ownerId } = body;

    if (!title || !ownerId) {
      return NextResponse.json(
        { message: "Title and Owner ID are required" },
        { status: 400 }
      );
    }

    const document = await prisma.document.create({
      data: {
        title,
        content: content || "",
        ownerId,
      },
    });

    return NextResponse.json(document, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const documents = await prisma.document.findMany({
    include: {
      owner: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return NextResponse.json(documents);
}