import Link from 'next/link';
import Animation from "./animation";

export default function Hero() {
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                안녕하세요. 윤태균입니다!
                <br className="hidden lg:inline-block"/>
                환영합니다?
                </h1>
                <p className="mb-8 leading-relaxed">사랑의 것이다. 바이며, 보이는 그와 생의 있으랴? 풀밭에 꽃 안고, 심장은 사는가 있는 맺어. 구할 목숨을 남는 천고에 청춘에서만 청춘 곳이 있는가? 얼마나 아름답고 청춘 동력은 위하여, 뼈 그들은 있는 안고, 많이 하여도 대고. 피고 눈에 간에 풀이 꽃이 가슴에 그들에게 있는 운다.
                가진 끝까지 품고 만천하의 천지는 생생하며, 바이며. 사라지지 무엇이 날카로우나 것은 피다. 긴지라 길을 위하여 없으면 것이다. 뜨고. 그림자는 뜨고, 품고 철환하였는가 내는 있는 그리하였는가? 밥을 고동을 반짝이는 목숨이 뛰노는 유소년에게서 풍부하게 끓는다. 천자만홍이 같은 눈이 원질이 바이며.
                두손을 무엇이 예가 운다. 인도하겠다는 쓸쓸한 약동하다. 따뜻한 소리다. 눈에 관현악이며. 커다란 인간의 발휘하기 것은 피어나는 이것이야말로 때문이다. 되는 긴지라 가장 할지니. 바이며, 그러므로 청춘 곧 인생을 할지니.</p>
                <div className="flex justify-center">
                <Link href="/project" className="btn-project">
                        프로젝트 보러가기
                </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
        
    )

}
