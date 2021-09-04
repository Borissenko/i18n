<template>
  <div>
    {{ $t('message.hello', { name: 'Kola' }) }}
    <!-- Получиться:  "hello_message Kola" -->
  </div>
</template>

//src/locales/en.json
{
"message": {
  "hello": "hello_message {name}"
},
"person": " {n} 00 | {n} 01 | {n} 02 | {n} 03"
}