
# G-shop API



## API Reference

## Main root

```
https://g-shop-server.onrender.com
```

## users api

#### get,post,put and delete all users

```http
/api/v1/users
```

* for get,put,delete with any query use query after this api. like this:
```http
/api/v1/users?email=abc@gmail.com
```

#### which data you can provide

| Property | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. |
| `email` | `string` | **Required and must be unique**. |
| `img` | `string` | **must be img link**. |
| `profession` | `string` | **Not Required**. |
| `gender` | `string` | **must be one of these 3- male,female,other**. |
| `phone` | `string` | **must be a Bangladeshi phone number without country code +88. and total digit will be 11**. |
| `role` | `string` | **must be one of these 3- admin,moderator,user**. |
| `status` | `string` | **must be active or blocked**. |
| `isVerified` | `string` | **must be verified or non-verified**. |
| `address` | `string` | **it will be a details address**. |
| `orders` | `string` | **must be a mongodb object. and it's a ref from orders model**. |

<!-- user api -->

## instructors api

#### get,post,put and delete all users

```http
/api/v1/instructors
```

* for get,put,delete with any query use query after this api. like this:
```http
/api/v1/instructors?email=abc@gmail.com
```

#### which data you can provide

| Property | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. |
| `email` | `string` | **Required and must be unique**. |
| `img` | `string` | **must be img link**. |
| `title` | `string` | **Not Required**. |
| `gender` | `string` | **must be one of these 3- male,female,other**. |
| `phone` | `string` | **must be a bangladesi phone number with country code +880. and total digit will be 14**. |
| `professionLevel` | `string` | **must be one of these 3- junior,senior,expert**. |
| `status` | `string` | **must be active or blocked**. |
| `desc` | `string` | **not required**. |
| `profession` | `string` | **not required. if use, then First letter must be uppercase**. |
| `teacherCategory` | `string` | **must be normal or best**. |
| `social_link` | `object` | **accept url of these properties:- instagram,facebook,twitter,pinterest**. |

<!-- instructors api -->

## courses api

#### get,post,put and delete all users

```http
/api/v1/courses
```

* for get,put,delete with any query use query after this api. like this:
```http
/api/v1/courses?email=abc@gmail.com
```

#### which data you can provide

| Property | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. |
| `trailer_video` | `string` | **must be a video link**. |
| `thumb_img` | `string` | **must be img link**. |
| `instructor` | `string` | **Required**. |
| `level` | `string` | **must be one of these 3- beginner,intermediate,expert**. |
| `price` | `number` | **required**. |
| `category` | `string` | **required**. |
| `certificate_details` | `string` | **not required**. |
| `for_whom` | `string` | **not required**. |
| `video` | `array of object` | **that will accept string type video url**. |
| `description` | `string` | **required**. |
| `rating` | `object` | **it's contain 2 objects- "total_rating" and "total_people" - both are number type**. |

<!-- courses api -->