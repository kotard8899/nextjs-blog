import Document, { Html, Head, Main, NextScript } from 'next/document'

// https://nextjs.org/docs/advanced-features/custom-document
// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps#context-object
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="zh-TW">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument