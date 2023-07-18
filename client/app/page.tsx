import ListItem from '@components/ListItem'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-scroll">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
          <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
                gap-3
                mt-4
              "
          >
            <ListItem
              href="/like"
              name="Liked Song"
              image="/images/liked.png"
            />
          </div>
        </div>
      </Header>
    </div>
  )
}
