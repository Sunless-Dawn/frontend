import Image from 'next/image';
import Layout from '@/components/layout.js';
import TimelineItem from '@/components/timeline-item.js';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col w-full lg:justify-center lg:w-[61.8%]">
          <div className="bg-black opacity-80 rounded-xl px-5 py-5 my-5 lg:w-full lg:px-0">
            <h1 className="text-3xl text-center">About</h1>

            <div className="flex flex-row">
              <div>
                <p className="m-2">
                  Enter a dystopian world of neon lights and dangerous corporations. In this thrilling cyberpunk turn-based strategy    game,  players engage in PVP combat. With each character represented as an NFT, you'll gain access to a unique  set   of   abilities and stats as you navigate the treacherous streets of the city and battle other players.
                </p>
                <p className="m-2">
                  Build your character and strategize your moves carefully to outmaneuver your opponents and rise to the top of   the     leaderboards. With endless character configuration possibilities, the battle for supremacy in Sunless Dawn  never  ends.
                </p>
                <p className="m-2">
                  Immerse yourself in a world of thrilling cyberpunk action and join the fight for survival in Sunless Dawn:  Tactical     Cyberpunk Action. Get your character now and join the fray!
                </p>
              </div>
              <div>
                <Image src="/about.png" width={1024} height={1024} />
              </div>
            </div>
          </div>

          <div className="bg-black opacity-80 rounded-xl px-5 py-5 my-5 lg:w-full lg:px-0">
            <h1 className="text-3xl text-center">Roadmap</h1>

            <TimelineItem when="Q2 2023">Development</TimelineItem>
            <TimelineItem when="Q3 2023">Character Mint and Game Begins</TimelineItem>
            <TimelineItem when="Q4 2023">Character Customization</TimelineItem>
            <TimelineItem when="Q1 2024">Expansion of shops and items</TimelineItem>
          </div>
        </div>
      </Layout>
    </>
  )
}
