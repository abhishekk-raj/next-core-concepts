import Link from "next/link";

const NewsArticle = async ({
    params,
    searchParams
}: {
    params: Promise<{articleId: string}>,
    searchParams: Promise<{lang ?: "en" | "hn" | 'fr'}>
}) => {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;

    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang}</p>

            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=hn`}>Hindi</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    )
}

export default NewsArticle;
