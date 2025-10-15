<template>
  <div class="login-page">
    <div class="login-container">
      <div class="logo-section">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/73c0f484b4ba3070d421a9008e9908da44811609?width=472"
          alt="poolinq DROP Logo"
          class="logo-image"
        />
      </div>

      <div class="form-section">
        <div class="input-group">
          <label class="input-label">Benutzername</label>
          <TextInputVariant
            v-model="username"
            variant="empty"
            placeholder=""
            size="full"
            :helper-text="null"
          />
        </div>

        <div class="input-group">
          <label class="input-label">Passwort</label>
          <TextInputVariant
            v-model="password"
            variant="empty"
            type="password"
            placeholder=""
            size="full"
            :helper-text="null"
            @keydown.enter="handleLogin"
          />
        </div>

        <BasicButton
          :label="isLoading ? 'WIRD GELADEN...' : 'ANMELDEN'"
          :primary="true"
          size="medium"
          :disabled="isLoading || !username || !password"
          class="login-button"
          @click="handleLogin"
        />

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BasicButton from '@/stories/BasicButton.vue';
import TextInputVariant from '@/components/Inputs/text Input/TextInputVariant.vue';
import { AuthService } from '@/services/auth';

const router = useRouter();
const username = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const handleLogin = async () => {
  if (!username.value || !password.value) return;

  errorMessage.value = '';
  isLoading.value = true;

  try {
    await AuthService.login({
      identifier: username.value,
      password: password.value,
    });

    router.push('/upload');
  } catch (error: any) {
    errorMessage.value = error.message || 'Anmeldung fehlgeschlagen';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--Neutral-Grey-400, #1b1b1c);
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 32px;
  border-radius: 16px;
  border: 2px solid var(--Neutral-Grey-300, #222325);
  background: linear-gradient(
    180deg,
    var(--Neutral-Grey-400, #1b1b1c) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  width: 100%;
  max-width: 364px;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.logo-image {
  max-width: 100%;
  height: auto;
}

.form-section {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  width: 100%;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
}

.input-label {
  color: var(--Neutral-Grey-100, #e6e1f3);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
}

.login-button {
  width: 100%;
  margin-top: 8px;
  background-color: var(--Primary-500, #0cba4a) !important;
  
  &:hover:not(:disabled) {
    background-color: #0aa43f !important;
  }
}

.error-message {
  color: #dc3545;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
}

@media (max-width: 480px) {
  .login-container {
    max-width: 90%;
    padding: 24px;
  }
}
</style>
