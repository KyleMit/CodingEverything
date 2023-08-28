# Svelte Kit

## Questions

* [How do get query string parameter in sveltekit?](https://stackoverflow.com/q/71379031/1366033)

  ```js
  export async function load({ params, url }) {
      let lang = url.searchParams.get('lang');
      let q = url.searchParams.get('q');
      return { lang, q };
  }
  ```

  See Also: [Loading data > using URL Data](https://kit.svelte.dev/docs/load#using-url-data)
