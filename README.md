# To run this app:
- `composer install`
- `yarn`
- copy `.env.example` to `.env`
- `artisan migrate --seed`
    + basic user credentials:
        * login `user@mail`, password `password`

### To have hot module replacement (HMR) in your app
- in your `.env` change `HMR_URL` to your app domain without `http://` prefix
    + won't work `http://site.com`
    + will work `site.com`
