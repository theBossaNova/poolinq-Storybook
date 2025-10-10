import { Story } from "@storybook/vue3";
import BasicButton from "./BasicButton.vue";

export default {
  title: "Example/Button Showcase",
  component: BasicButton,
};

const ShowcaseTemplate: Story = () => ({
  components: { BasicButton },
  template: `
    <div style="padding: 40px; background: #f5f5f5;">
      <h2 style="margin-bottom: 24px; font-family: 'Roboto', sans-serif;">Button Component - All Variants</h2>
      
      <!-- Primary Large -->
      <div style="display: flex; gap: 16px; margin-bottom: 24px; align-items: center;">
        <span style="width: 150px; font-family: 'Roboto', sans-serif; font-weight: 500;">Primary Large:</span>
        <basic-button primary size="large" label="Button" />
        <basic-button primary size="large" label="Button" style="filter: brightness(0.9);" />
        <basic-button primary size="large" label="Button" disabled />
      </div>

      <!-- Primary Medium -->
      <div style="display: flex; gap: 16px; margin-bottom: 24px; align-items: center;">
        <span style="width: 150px; font-family: 'Roboto', sans-serif; font-weight: 500;">Primary Medium:</span>
        <basic-button primary size="medium" label="Button" />
        <basic-button primary size="medium" label="Button" style="filter: brightness(0.9);" />
        <basic-button primary size="medium" label="Button" disabled />
      </div>

      <!-- Primary Small -->
      <div style="display: flex; gap: 16px; margin-bottom: 32px; align-items: center;">
        <span style="width: 150px; font-family: 'Roboto', sans-serif; font-weight: 500;">Primary Small:</span>
        <basic-button primary size="small" label="Button" />
        <basic-button primary size="small" label="Button" style="filter: brightness(0.9);" />
        <basic-button primary size="small" label="Button" disabled />
      </div>

      <!-- Secondary Large -->
      <div style="display: flex; gap: 16px; margin-bottom: 24px; align-items: center;">
        <span style="width: 150px; font-family: 'Roboto', sans-serif; font-weight: 500;">Secondary Large:</span>
        <basic-button size="large" label="Button" />
        <basic-button size="large" label="Button" style="filter: brightness(0.9);" />
        <basic-button size="large" label="Button" disabled />
      </div>

      <!-- Secondary Medium -->
      <div style="display: flex; gap: 16px; margin-bottom: 24px; align-items: center;">
        <span style="width: 150px; font-family: 'Roboto', sans-serif; font-weight: 500;">Secondary Medium:</span>
        <basic-button size="medium" label="Button" />
        <basic-button size="medium" label="Button" style="filter: brightness(0.9);" />
        <basic-button size="medium" label="Button" disabled />
      </div>

      <!-- Secondary Small -->
      <div style="display: flex; gap: 16px; margin-bottom: 24px; align-items: center;">
        <span style="width: 150px; font-family: 'Roboto', sans-serif; font-weight: 500;">Secondary Small:</span>
        <basic-button size="small" label="Button" />
        <basic-button size="small" label="Button" style="filter: brightness(0.9);" />
        <basic-button size="small" label="Button" disabled />
      </div>

      <div style="margin-top: 32px; padding: 16px; background: white; border-radius: 8px;">
        <p style="margin: 0; font-family: 'Roboto', sans-serif; font-size: 14px; color: #666;">
          Each row shows: Default | Hover | Disabled states
        </p>
      </div>
    </div>
  `,
});

export const AllVariants = ShowcaseTemplate.bind({});
