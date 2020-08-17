import artists from './json/artists.json'

Vue.component('tabs', {
    template: `
        <div>
            <div class="nav">
              <ul>
                <li v-for="tab in tabs" :class="['navBtn', { 'is-active': tab.isActive, 'homeBtn': tab.home }]">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
                <li class="navBtn mainBtn">
                    <a target="_blank" href="https://hubs.mozilla.com/t7ZhGX6/the-trouble-with-double-vr">
                        <span class="glitch-block" data-text="visit">vr exhibition</span>
                    </a>
                </li>
              </ul>
            </div>

            <div>
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return { tabs: [] };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: { required: true },
        selected: { default: false },
        home: { default: false }
    },
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        href() {
            if (this.home)
                return '#';
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#app',
    data: {
        artists: artists
    }
});