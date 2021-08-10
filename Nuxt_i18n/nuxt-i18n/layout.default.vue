<template>
</template>

<script>
export default {
  // прописываем html-хедеры c учетом языков
  head() {
    const i18nSeo = this.$nuxtI18nHead({ addSeoAttributes: true })
    // const i18nSeo = this.$nuxtI18nSeo()     //оч старый параметр

    const meta = [
      ...i18nSeo.meta,
      {
        hid: 'description',
        name: 'description',
        content: this.$t('meta.description'),
      },
      {
        property: 'og:site_name',
        content: 'GlobalRusTrade',
      },
      {
        name: 'application-name',
        content: 'GlobalRusTrade',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'GlobalRusTrade',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: this.$t('meta.title'),
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: this.$t('meta.description'),
      },
      {
        property: 'og:url',
        content: `https://globalrustrade.com${this.$route.path}`,
      },
      {
        property: 'og:image',
        content: 'https://globalrustrade.com/images/og/grt-cover.jpg',
      },
      {
        property: 'og:image:width',
        content: '600',
      },
      {
        property: 'og:image:height',
        content: '600',
      },
      {
        property: 'vk:image',
        content: 'https://globalrustrade.com/images/og/grt-cover.jpg',
      },
      {
        property: 'fb:image',
        content: 'https://globalrustrade.com/images/og/grt-cover.jpg',
      },
      {
        property: 'fb:app_id',
        content: '2368975760088263',
      },
      {
        property: 'twitter:image',
        content: 'https://globalrustrade.com/images/og/grt-cover.jpg',
      },
      {
        property: 'twitter:description',
        content: this.$t('meta.twitter_description'),
      },
      {
        property: 'twitter:cart',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: `https://globalrustrade.com${this.$route.path}`,
      },
    ];

    this.$store.commit('meta/setLayoutMetaTags', {meta});

    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta,
      link: [...i18nSeo.link],
    };
  }
}
</script>

<style lang="scss">
</style>
