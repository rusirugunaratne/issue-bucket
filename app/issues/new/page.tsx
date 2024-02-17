import dynamic from "next/dynamic"
import IssueForm from "../_components/IssueForm"
import IssueFormSkeleton from "./loading"

const issueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
})

const NewIssuePage = () => {
  return <IssueForm />
}

export default NewIssuePage
