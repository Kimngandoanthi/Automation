import { test, expect } from '@playwright/test';

test('Create post', async ({ request }) => {
    const _response = await request.post ('post/create' , {
        data: {
            "text": "test",
            "image": "https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
            "likes": 1,
            "tags": ["tag 1","tag 2"],
            "owner": "60d0fe4f5311236168a109d4"
        }
        ,headers: {
            "app-id": "62285012fb4aae466e34ef05"
        }
    });
    console.log(await _response.json())
});