<script setup lang="ts">
  const { toast } = useToast()
</script>

<template>
  <Button
    variant="outline"
    @click="
      () => {
        toast({
          description: 'Your message has been sent.',
        })
      }
    "
  >
    Show Toast
  </Button>
</template>
