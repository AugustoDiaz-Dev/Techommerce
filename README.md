# Tech Ecommerce

- npx create-next-app
- npm run dev

- npm install -g @sanity/cli
- sanity start

## Others

rafce = rEACT aRROW fUNCTION cOMPONENT eXPORT

## .babelrc

{
    "presets": ["next/babel"]
}

## .eslintrc.json 

{
  "extends": ["next/babel","next/core-web-vitals"]
}

- ctrl + space to import not imported files and click. First select the word
- ctrl + w to close tabs in VSCODE
- *** In NEXTJS to fetch data we use getServerSideProps. This is different than React because in React you usually use useEffect().

```jsx
const Product = ({ product: { image, name, slug, price } }) => {
                              ^
return (
       <div>
         <Link href={`/product/${slug.current}`}>
```
