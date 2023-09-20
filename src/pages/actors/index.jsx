import MainLayout from "@/layouts/mainLayout"
import CardA from "@/component/cardA.jsx"
import { fetchApi } from "@/util/FetchApi"
import { POPULAR_ACTORS } from "@/constants"
import { Grid } from "@mui/material"
import Link from "next/link"

export default function Actors({ actors }) {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        {actors.results.map((actor) => {
          return (
            <Grid item xs={3} key={actor.id}>
              <Link href={`/actors/${actor.id}`}>
                <CardA {...actor} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const data = await fetchApi(POPULAR_ACTORS)
  return {
    props: {
      actors: data,
    },
  }
}
