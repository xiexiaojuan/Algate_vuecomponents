<style>
    @import 'menu.postcss';
</style>
<template>
    <section>
        <div class="eUI_menu">
            <el-col>
                <el-menu
                    :default-active="$route.path"
                    router
                    unique-opened
                    collapse-transition
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <template v-for="(v,i) in navData">
                        <!-- router 不开启index作为path跳转可以用，default-active绑定index的默认值 -->
                        <!-- <el-menu-item v-if="!v.data" :key="i" :index="(i+1).toString()">
                            <template slot="title"><i class="el-icon-setting"></i>{{v.name}}</template>
                        </el-menu-item>
                        <el-submenu v-if="v.data" :key="i" :index="(i+1).toString()">
                            <template slot="title"><i class="el-icon-menu"></i>{{v.name}}</template>
                            <el-menu-item v-for="(m,j) in v.data" :key="j" :index="(i+1)+'-'+(j+1)">{{m.name}}</el-menu-item>
                        </el-submenu> -->
                        <el-menu-item v-if="!v.data" :key="i" :index="v.link">
                            <template slot="title"><i :class="v.icon"></i>{{v.name}}</template>
                        </el-menu-item>
                        <el-submenu v-if="v.data" :key="i" :index="(i+1).toString()">
                            <template slot="title"><i :class="v.icon"></i>{{v.name}}</template>
                            <el-menu-item v-for="(m,j) in v.data" :key="j" :index="m.link">{{m.name}}</el-menu-item>
                        </el-submenu>
                    </template>
                </el-menu>
            </el-col>
        </div>
        <div class="eUI_container">
            <router-view></router-view>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            navData: [
                {
                    name: 'elementUI',
                    icon: 'el-icon-menu',
                    data: [
                        {
                            name: 'eUI-upload',
                            link: '/elementUI/upload'
                        },
                        {
                            name: 'eUI-schedule',
                            link: '/elementUI/schedule'
                        }
                    ]
                },
                {
                    name: 'customUI',
                    icon: 'el-icon-edit-outline',
                    data: [
                        {
                            name: 'cUI-icon',
                            link: '/customUI/icon'
                        },
                        {
                            name: 'cUI-upload',
                            link: '/customUI/upload'
                        },
                        {
                            name: 'cUI-step',
                            link: '/customUI/step'
                        },
                        {
                            name: 'cUI-schedule',
                            link: '/customUI/schedule'
                        }
                    ]
                },
                {
                    name: 'Other',
                    icon: 'el-icon-more',
                    link: '/Other'
                }
            ]
        };
    }
};
</script>
