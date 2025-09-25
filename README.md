# OPENMYJS
## [Uniapp-Template]()

����uniapp + cli + vue3 + ts + pinia + vite + eslint + prettier + UnoCSS

# vite ���ɹ��ܱ��

| ����                                 | ���ܽ���                                                                  | �ĵ���ַ |
| ------------------------------------ | ------------------------------------------------------------------------- | -------- |
| @uni-helper/vite-plugin-uni-pages    | Ϊ Vite �µ� uni-app ��Ŀ�ṩԼ��ʽ·�ɣ��ļ�·�ɣ���ҳ�������Զ����Ĳ�� | ----     |
| @uni-helper/vite-plugin-uni-platform | �� @uni-helper/vite-plugin-uni-pages ���һ��ʹ��                         | ----     |
| @uni-helper/vite-plugin-uni-layouts  | ��uniapp��ʹ��layout����                                                  | ----     |

## @uni-helper/vite-plugin-uni-pages
Ϊ Vite �µ� uni-app ��Ŀ�ṩԼ��ʽ·�ɣ��ļ�·�ɣ���ҳ�������Զ����Ĳ��
### �ĵ���ַ
[@uni-helper/vite-plugin-uni-pages](https://www.npmjs.com/package/@uni-helper/vite-plugin-uni-pages)
### ���ܽ���
- �Զ����� pages.json
- ֻ���� src/pages/ Ŀ¼���½� .vue �ļ���������Զ�����ע��Ϊҳ��·�ɣ������ֶ�ά�� pages.json �ļ���
- ֧����ҳ���ļ��ж���·��Ԫ��Ϣ
- ͨ�� <route> ����飬������ .vue �ļ���ֱ������ҳ��ĵ�������ʽ������ˢ�¡�Ȩ�޵�Ԫ��Ϣ����Щ���û��Զ�ͬ���� pages.json �С�
- ֧��ʹ�� TypeScript ��д pages.json
- ����ͨ�� pages.config.ts ������ȫ��ҳ�����ã������ͳ�� JSON �ļ���ʽ��������ά���Ժ����Ͱ�ȫ��
- ֧�� layout ����ϵͳ������� @uni-helper/vite-plugin-uni-layouts��
- ����ҳ����ָ��ʹ�õĲ��������ʵ������ Nuxt �Ĳ��ֹ��ܡ�
- ֧�����µ� definePage �꣨ʵ���ԣ�
- �ṩ�������Ͱ�ȫ�ķ�ʽ������ҳ��Ԫ��Ϣ�������ͳ�� <route> ��ǩ��ʽ��
- �ܽ᣺
  - �������������ֶ�ά�� pages.json��ͨ���ļ��ṹ��ҳ�������ü����Զ����·��ע���ҳ�����ã��������� uni-app ��Ŀ�Ŀ���Ч�ʺͿ�ά���ԡ�
## @uni-helper/vite-plugin-uni-platform
 - �� @uni-helper/vite-plugin-uni-pages ���һ��ʹ��

## @uni-helper/vite-plugin-uni-layouts
### �ĵ���ַ
[@uni-helper/vite-plugin-uni-layouts](https://www.npmjs.com/package/@uni-helper/vite-plugin-uni-layouts)
### ���ܽ���

Ϊ **Vite ������ uni-app ��Ŀ** �ṩ **�� Nuxt ����ϵͳ** �Ĳ���������������£�

---

### ? һ�仰�ܽ�
> �������� Nuxt һ������ `src/layouts/*.vue` �ļ�ͳһ����ҳ�沼�֣�֧��ҳ�漶�л����֡�ȫ�ֲ�ۡ��Զ����룬���ÿ��ҳ���ظ�д������/TabBar��

---

### ?? ���Ĺ���

| ���� | ˵�� | ʾ�� |
|---|---|---|
| **�Զ�ע�᲼��** | `src/layouts/*.vue` �Զ�ʶ��Ϊ���ò��� | `src/layouts/default.vue` �� Ĭ�ϲ��� |
| **ҳ�漶�л�����** | �� `.vue` ҳ������ `<route>` ��ָ������ | `<route>{"layout":"custom"}</route>` |
| **ȫ�ֲ�ۻ���** | �����ļ��� `<slot />` ��Ⱦҳ������ | ͬ Nuxt �� `<Nuxt />` |
| **�Զ�����** | �����ֶ� import ������� | ����Զ����� |
| **֧��ȫ�����ע��** | ��һ�����ڲ��������� Toast��Loading �ȣ�ȫ App ���� | ������ȫ�ֵ����������� |

---

### ?? ����Ŀ¼�ṹ

```
src
���� layouts
   ���� default.vue      // Ĭ�ϲ���
   ���� custom.vue       // �Զ��岼��
src
���� pages
   ���� index.vue        // ͨ�� route ��ָ������
```

---

### ?? ʹ��ʾ��

1. ���岼�� `src/layouts/default.vue`
```vue
<template>
  <AppHeader />
  <slot />          <!-- ҳ�����ݲ�� -->
  <AppFooter />
</template>
```

2. ҳ��ָ������ `src/pages/index.vue`
```vue
<route lang="json">
{ "layout": "default" }
</route>
```

---

### ?? ���ó���

- ��Ҫ**ͳһ������/�ײ���**���
- ��**�����л���ͬ����**�����¼ҳ�޵���������ҳ�� TabBar��
- ��**ȫ��ע�� Toast��Loading��ȫ�ֵ���**�����������ÿ��ҳ���ظ�����
- ϲ�� Nuxt �� layouts ���飬���� uni-app �︴��

---


## @uni-helper/vite-plugin-uni-manifest

`@uni-helper/vite-plugin-uni-manifest` �� **�� TypeScript ��д�͹��� uni-app ��Ŀ manifest.json ����** �� Vite �����

---

### ? һ�仰�ܽ�
> ������ `manifest.config.ts` �����д `manifest.json`��֧��������ʾ���໷�����ã����Զ��������յ� `manifest.json` �ļ���

---

### ?? ���Ĺ���

| ���� | ˵�� |
|---|---|
| **TypeScript ��д����** | �� `manifest.config.ts` д���ã���� JSON ��д��֧��������ʾ��ע�� |
| **�Զ����� manifest.json** | ������ڹ���ʱ�Զ����� `manifest.json`��**��Ҫ�ֶ��޸�** |
| **�໷��֧��** | �ɸ��ݻ����������� dev/prod����̬���ɲ�ͬ���� |
| **ƽ̨������֧��** | ֧�� `mp-weixin`��`app-plus`��`h5` ��ƽ̨���컯���� |
| **�� Vite ����** | ��Ϊ Vite ���ʹ�ã����ü򵥣�֧���ȸ��� |

---

### ?? ʹ�÷���

#### 1. ��װ
```bash
pnpm add -D @uni-helper/vite-plugin-uni-manifest
```

#### 2. ���� `vite.config.ts`
```ts
import Uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'

export default defineConfig({
  plugins: [
    UniManifest(), // ������ Uni() ֮ǰ
    Uni()
  ]
})
```

#### 3. ���� `manifest.config.ts`
```ts
import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'

export default defineManifestConfig({
  name: '�ҵ�С����',
  appid: '__UNI__XXXXXXX',
  description: '���� uni-app ��С����',
  'mp-weixin': {
    appid: 'wx1234567890',
    optimization: {
      subPackages: true
    }
  }
})
```

---

### ?? ע������
- `manifest.json` ���Զ����ɵģ�**��Ҫ�ֶ��޸�**������ᱻ���ǡ�
- ����������д�� `manifest.config.ts` �С�
- ֧�� `.ts/.js/.json` �ȶ��ָ�ʽ���Ƽ�ʹ�� TypeScript��

---

### ?? ʾ������
- ��̬����С���� `appid` �� `Ȩ������`
- �����Ƿ����ְ��Ż� `subPackages`
- �����ϴ�ʱ����ĳЩ�ļ��У��� `static/img`��

---

### ?? �ܽ�
����������**��д����һ��д����**������ȫ����ά��������չ���� uni-app + Vite ��Ŀ���Ƽ�ʵ��֮һ��