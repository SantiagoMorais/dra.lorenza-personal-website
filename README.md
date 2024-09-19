# Dra. Lorenza Arruda Personal Website

🧾✍ This is a freelancer project using React | TypeScript | Styled-components | GraphQL

[Click here to view the project in your web browser](https://asbasesdavidaplena.com).

<img src="./src/assets/screenshots/browserView.png" alt="Desktop preview" />

## Summary

- [General Vision](#general-vision)
  - [Objective](#objective)
  - [Screenshots](#screenshots)
- [My Process](#my-process)
  - [Technologies Used](#technologies-used)
  - [Project Functionality](#project-functionality)
  - [How to Run the Project](#how-to-run-the-project)
  - [Continuous Development](#continuous-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## General Vision

### Objective

- To create a website that permits the user to know more about Dra.Lorenza medical care.
- To use swipers to show the patients commentaries and therapies used by Dra.Lorenza.
- To create a call to the users to connect to the Dra.Lorenza by her social midia.
- To create a FAQs section.
- To create the contacts and address section.
- To create a blog, that permits the client to add new posts using hygraph, and configured with GraphQL.

### Screenshots

#### Browser view

<img src="./src/assets/screenshots/browser-view.gif" alt="Project view on Desktop"/>

#### Mobile view

<img src="./src/assets/screenshots/mobile-view.gif" alt="Project view on mobile"/>

## My Process

### Technologies Used

- [React](https://react.dev) - The cornerstone of my development toolkit, empowering me to craft reusable components that form the foundation of robust applications and stunning web interfaces.
- [GraphQL](https://graphql.org) - A query language for your API that enables precise and efficient data fetching, allowing clients to request exactly the data they need and nothing more, thus optimizing performance and reducing over-fetching.
- [Swiper](https://swiperjs.com) - A modern mobile touch slider library that provides a seamless and highly customizable carousel experience, perfect for implementing responsive slideshows and galleries in web applications.
- [Styled-Components](https://styled-components.com) - A popular CSS-in-JS library that brings the full power of JavaScript to styling, enabling the creation of component-level styles with ease, ensuring modular and maintainable code.
- [Typescript](https://www.typescriptlang.org) - A JavaScript superset that enhances code quality, minimizes bugs, and boosts security.

### Project Functionality

The project is not complex, but is huge, so let's explain everything by parts.

- The code was created with React, Vite and TypeScript to your structure.
- Styled-Components library was used to style the components using string interpolation.
- Vitest and React-Testing-Library were used to test our components to avoid errors and components conflicts.
- Swipper library permits to create a carrousel that shows the patients reviews and the procedures performed in the office.
- GraphQL turns possible to configure a remote API using Hygraph into our project, that permits the client to write the posts content to your blog remotely and securely.

#### Variables

Let's divide by parts. To performs the project and to make easy to maintain and scale, the variables were maintained into a unique file. That way, it's necessary just to change a single line to update all project in the styles, personal data, links, etc.

```ts
interface IStyle {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  textColor: string;
  secondaryTextColor: string;
}

export const style: IStyle = {
  primaryColor: "#73243C",
  secondaryColor: "#EDDDD6",
  tertiaryColor: "#B68C8A",
  textColor: "#ffffff",
  secondaryTextColor: "#000000",
};
```

#### Swiper

The Swiper library is really detailed and documented, that turns possible to use it easily on services and assessments components.

The configuration is really simple:

- loop: defines if the carousel will run in loop automatically.
- spaceBetween: space between slides/images.
- slidesPerView: how many slides will be shown. It was used a variable that changes when the screen width changes to adapt to the mobile screen.
- navigation: The left and right arrow that changes the slides position.
- modules: The swiper style. There are a lot of possibilities of modules available in the website.
- pagination: Properties that define how the swipper will behave.
- autoplay: works automatically
- SwiperSlide: The component that contains the image/content details.
- And even more.

```tsx
<Swiper
  loop={true}
  className="swiper"
  spaceBetween={spaceBetween ? spaceBetween : 50}
  slidesPerView={slidesPerView}
  navigation
  modules={[Pagination]}
  pagination={{
    dynamicBullets: true,
    clickable: true,
  }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
>
  {info.map((item) => (
    <SwiperSlide key={item.id} className="slide">
      <img src={item.image} alt="slideImage" className="slideImage" />
      <h3 className="itemDescription">{item.description}</h3>
    </SwiperSlide>
  ))}
</Swiper>
```

For more details, access the [documentation here](https://swiperjs.com/get-started).

#### Blog

The blog functionality was created using hygraph and GraphQL. Hygraph is a headless CMS (Content Management System) that allows developers to create and manage content through a GraphQL API. It provides a flexible and great way to build content models and retrieve data, making it perfect for projects like blogs. With it, it's possible to define content types (e.g., posts, authors), structure your data, and then use the GraphQL API to fetch this data in your front-end applications. This approach separates content management from the front-end, giving you the freedom to design and develop without constraints. It's particularly useful for blogs as it allows for easy content updates, scalability, and a smooth integration with frameworks as we are using React here.

<img src="./src/assets/screenshots/hygraph-website.png" alt="hygraph website">

When the user defines the project schema, in the content window the client can add new posts and authors to your blog. After that, we just need to configure it in the React application using Apollo-Client, as recommended by Hygraph docs.

Apollo Client is a popular state management library that simplifies working with GraphQL APIs in JavaScript applications, especially React. It provides tools for querying, caching, and managing data fetched from a GraphQL API, such as Hygraph, that we are using here.

Using Apollo Client with Hygraph is recommended because it allows us to efficiently handle GraphQL queries and mutations, manage the state of the application, and cache data locally to reduce unnecessary network requests. Apollo Client also offers features like automatic query updates, pagination, and error handling, making it easier to integrate and manage the data from Hygraph in the React.

#### Configuration

```ts
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_API_URL,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: import.meta.env.VITE_HYGRAPH_API_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_API_TOKEN}`,
    },
  }),
});
```

A new client is created using ApolloClient and it is used to wrap the components that will use it, using ApolloProvider.

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
```

The hygraph give us sensitive data, as the API URL access from your data and a security token. That way, it is necessary to configure a `.env` file to aims these data, using it, for example that way: `import.meta.env.VITE_HYGRAPH_API_URL`. Vite automatically configure .env in the project, so don't worry to configure it if you are using your React app with it.

Apollo-client requires the uri(the API URL), the cache and the headers, that is the security token created in the hygraph website. Without the token, we can't access the API data.

After that, it's necessary to configure the GraphQL query code. It's really similar to a JSON file, but without quotes and for sure it has more details, but here is really simple:

```ts
export const GET_POSTS_QUERY = gql`
  {
    posts {
      id
      titulo
      subtitulo
      data
      imagem {
        url
      }
      videoUrl
      texto {
        html
      }
      autor {
        nome
        descricao
        avatar {
          url
        }
        crm
        rqe
      }
    }
  }
`;
```

That way, our API return will be available as:

<img src="./src/assets/screenshots/API-result.png" alt="API return">

Finally, we just need to configure the components that need these data to show them into the screen using `useQuery` hook, made available by Apollo-Client.

```tsx
const { loading, error, data } = useQuery(GET_POSTS_QUERY);
```

It's possible to configure the component to render specific messages when the data is loading and when occurs an error.

The post text is returned as a string in html format. That way, it's necessary to use [html-react-parser](https://www.npmjs.com/package/html-react-parser) library that converts an HTML string to one or more React elements.

### How to execute the project

- The project was created with [React-Vite](https://vitejs.dev).

- To download the project, open the terminal in the VSCode and write the dependencies code installations: **npm install**

The package.json file already contains the version of the library in its data, so all the libraries used in this project will be installed on your machine in the same way. But if you are interested in how to download, use, or learn more about the libraries that were used in my code, as well as the localStorage, access the links in the [Usefull resources](#usefull-resources).

- To run the project in the browser, it is necessary to activate **NPM Scripts** in the three dots next to the EXPOLORER of VSCode or to write on the terminal `npm run dev`.

<img src='./src/assets/screenshots/instructions-path-1.bmp' alt="instructions path 1">

- Then, in the bottom-left window of **NPM SCRIPTS**, click on the **run** button next to package.json/dev vite.

<img src='./src/assets/screenshots/instructions-path-2.bmp' alt="instructions path 2">

- Finally, in the terminal, keep the **localhost** link will appear where the project will be running in your browser. Hover over it and click **Follow link**, or press the ctrl button on your keyboard and click on the **localhost**, and the page will open in your default browser.

<img src='./src/assets/screenshots/instructions-path-3.bmp' alt="instructions path 3">

There are other ways to open the project, but that form it is the one that I'm used to use.

### Continuous development

That was the first freelancer project that I've made, and that was exciting, because I had to study subjects that I don't even knew that existed. It's incredible how exist almost a library for everything, as the [Swiper](https://swiperjs.com) and [html-react-parser](https://www.npmjs.com/package/html-react-parser), that made us more secure to make risks and try to face a new project.

With it, I could improve my habilities to communicate with a client, to understand his wishes and interests and to learn how to explain the project and the paths correctly.

That is just the beggining of more opportunities like that. Specially to face some challenges as to use new technologies as GraphQL, how to deploy a project, to create a website domain, etc. I just have to thanks Dra. Lorenza Arruda for the trust.

### Useful Resources

- [Hygraph](https://hygraph.com/docs): A headless CMS that enables flexible content management through a GraphQL API, allowing developers to create structured content models and seamlessly integrate dynamic content into applications. -[html-react-parser](https://www.npmjs.com/package/html-react-parser): A utility for parsing and rendering HTML strings as React components, providing a safe and convenient way to integrate dynamic HTML content within React applications.
- [Font-awesome-icons](https://fontawesome.com) - A straightforward React library for easily integrating a wide range of icons into projects.

## Author

- GitHub - [Felipe Santiago Morais](https://github.com/SantiagoMorais)
- Linkedin - [Felipe Santiago](https://www.linkedin.com/in/felipe-santiago-873025288/)
- Instagram - [@felipe.santiago.morais](https://www.instagram.com/felipe.santiago.morais)
- Email - <a href="mailto:contatofelipesantiago@gmail.com" target="blank">contatofelipesantiago@gmail.com</a>
