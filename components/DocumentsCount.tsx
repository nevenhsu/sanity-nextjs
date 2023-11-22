export const query = `*[]`

export default function DocumentsCount({ data }: { data: number }) {
  return <div>There are {data} documents</div>
}
