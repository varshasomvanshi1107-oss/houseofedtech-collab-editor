import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET Single Document
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const document = await prisma.document.findUnique({
    where: {
      id,
    },
  });

  if (!document) {
    return NextResponse.json(
      { message: "Document not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(document);
}

// UPDATE Document
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const { title, content } = body;

  const updatedDocument = await prisma.document.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });

  return NextResponse.json(updatedDocument);
}

// DELETE Document
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.document.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    message: "Document Deleted Successfully",
  });
}