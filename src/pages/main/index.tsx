import main from "@/styles/home.module.scss"
import image from "next/image";

export function test(){
    <div>
        <img src="" alt="" />
        <div>
            <h1>test</h1>
        </div>
    </div>
}

export default function home(){
    return(
        <>
            <div className={main.contentWrap}>
                <div className={main.header}>
                    <div className={main.hamburger}>
                        <span className={main.hamLine}></span>
                        <span className={main.hamLine}></span>
                        <span className={main.hamLine}></span>
                    </div>
                    <div className={main.hamMenu}>
                        <div className={main.hamburger}>
                            <span className={main.hamLine}></span>
                            <span className={main.hamLine}></span>
                            <span className={main.hamLine}></span>
                        </div>
                        <div className={main.user}>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <h1>ユーザー名</h1>
                            <p className={main.icon}>
                                <a className={main.iconedit} href="#">プロフィール</a>
                            </p>
                        </div>
                        <div className={main.other}>
                            <p className={main.icon}>
                                <a className={main.iconhelp} href="#">よくある質問</a>
                            </p>
                            <p className={main.icon}>
                                <a className={main.iconset} href="#">設定</a>
                            </p>
                            <p className={main.icon}>
                                <a className={main.iconaut} href="#">ログアウト</a>
                            </p>
                        </div>
                    </div>
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
            <footer className={main.footer}>
                <div className={main.foBtn}>
                    <img src="/images/keyboard_voice.png" alt="マイク" />
                </div>
            </footer>
        </>
    )
}