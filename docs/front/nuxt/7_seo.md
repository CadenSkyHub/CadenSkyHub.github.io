# SEO 配置

[SEO and Meta · Get Started with Nuxt](https://nuxt.com/docs/getting-started/seo-meta)

``` vue
<script setup lang="ts">

type User = {
    id: string,
    email: string,
    password: string,
    created_at: string,
    updated_at: string,
}

const {status, data} = await useLazyFetch<User>('/api/cokbok')

const user = ref<User | null>(null)

if (data) {
    user.value = data.value
}

useSeoMeta({
    title: user.value?.id,
    description: user.value?.email,
})

</script>
```





