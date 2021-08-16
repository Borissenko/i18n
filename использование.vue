<template>
  <div>
    {{ $t('message.hello', { name: 'world' }) }}
    <!--    hello_messege  world-->
  </div>
</template>

//src/locales/en.json
{
"message": {
  "hello": "hello_messege {name}"
},
"person": " {n} 00 | {n} 01 | {n} 02 | {n} 03"
}