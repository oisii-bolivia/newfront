import main from "@/app/home.module.scss"
import { Hamburger } from "@/features/home/hamburger"
import { HamMenu} from "@/features/home/ham_menu"
import { BottomBar } from "@/features/home/bottom_bar"

export default function Home(){
  return(
    <>
      <div className={main.contentWrap}>
        <div className={main.header}>
          <Hamburger />
        </div>
        <div className={main.scenery}>
          <div className={main.wall}>
            <picture className={main.onWall}>
              <img src="/images/curtain_left.png" alt="左側のカーテン" />
              <img src="/images/window.png" alt="窓" />
              <img src="/images/curtain_right.png" alt="右側のカーテン" />
            </picture>
          </div>
          <div className={main.desk}>
            <picture>
              <img src="/images/desk.png" alt="木目の机" />
            </picture>
          </div>
        </div>
        <div className={main.talkArea}>
          <div className={main.summary}>
            <div className={main.talkHead}>
              <h2 className={main.title}>トーク01</h2>
              <p className={main.time}><time dateTime="21:10">21:10</time></p>
            </div>
            <div className={main.talkConpo}></div>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  )
}
