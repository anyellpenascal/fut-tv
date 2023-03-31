import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutComponent from '@/components/AboutComponent.vue'


describe('AboutComponent.vue', () => {
    it('renders', () => {
        const wrapper = mount(AboutComponent)
        expect(wrapper.exists()).toBe(true)
    }),
    it("mount component", async () => {
        expect(AboutComponent).toBeTruthy();
      
        const wrapper = mount(AboutComponent, {
          props: {
            title: "Mohamed",
          },
        });
        expect(wrapper.text()).toContain("Mohamed");
      });
});
