This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

npm i

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Requirements

What to build Using a Javascript library of your choice, build a collection page that displays bundles filtered based on selected scent option(s). Use the following API endpoints to retrieve the data:

Base URL: https://ae3t7l1i79.execute-api.us-east-1.amazonaws.com/ Endpoints: GET /bundles, GET /product/{handle}

Requirements Display the following information for a bundle: image, title, price, original price (if applicable), scent profile, and included products. The scent filter should be at the top of the page, with available scent options listed. It may be a group of checkboxes, a drop down, or any other UI format you want. The filter must be functional; the options selected updates the bundles displayed. See the design example below. You may use it as is or modify it. Feel free to come up with your own design if you want. (Optional) Make the page responsive. (Optional) Use the scent specific colors: woodsy: #165834, citrus: #de7c00, fresh: #006fd6, herbal: #5a3714, rich: #e0a17e, spiced: #c10000

<img width="400" alt="Screen Shot" src="/Screen-Shot.png">
