<script setup lang="ts">
  import { h } from 'vue'

  const { toast } = useToast()
</script>

<template>
  <Button
    variant="outline"
    @click="
      () => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          variant: 'destructive',
          action: h(
            ToastAction,
            {
              altText: 'Try again',
            },
            {
              default: () => 'Try again',
            },
          ),
        })
      }
    "
  >
    Show Toast
  </Button>
</template>
