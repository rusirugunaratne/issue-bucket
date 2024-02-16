import React from "react"
import prisma from "@/prisma/client"
import { notFound } from "next/navigation"
import { number } from "zod"

interface Props {
  params: { id: string }
}

const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "number") notFound()

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return <div>{issue.title}</div>
}

export default IssueDetailPage
