# BootStrap 개요

bootStrap에서는 미리 정의된 스타일과 스크립트를 제공한다. 예를 들면 버튼들을 아래와 같이 정의하면 bootStrap에서 미리 정의된 스타일이 적용된다.
```html
<button type="button" class="btn btn-primary">text</button>
```
[참고](https://getbootstrap.com/docs/5.1/getting-started/introduction/ "getbootstrap.com")  

또 script는 BootStrap의 플러그인과 [Popper JS](https://popper.js.org/)의 번들로 제공되는데 Popper는 팝업을 쉽게 구현할 수 있는 플러그인이다. (Popper JS를 이미 사용하고 있다면 따로 제공되는 플러그인만 참조하면 된다.)

CSS
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

JS
```html
<!-- Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

<!-- Seperate -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
```

<br>

# 버튼과 버튼 그룹

[BootStrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/ "getbootstrap.com") 페이지에서 'docs - components'로 들어가면 미리 정의된 요소들을 사용할 수 있다.


### 버튼

그중 Buttons를 보면 버튼과 관련된 내용을 확인할 수 있다. 아래와 같이 입력하면, BootStrap에서 미리 정의한 버튼 스타일을 가져와 사용할 수 있다.

```html
<button type="button" class="btn btn-primary">Primary</button>
```

### 버튼 그룹

여러 가지 버튼을 하나의 그룹으로 묶고싶다면 하나의 `div` 태그 안에 `btn-group` 클래스를 부여하면 된다. 세 가지 요소가 한 줄로 묶여 그룹화된다.

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary">Primary</button>
</div>
```

### Outline buttons

버튼의 배경색을 제거하고 외곽선만 남긴 스타일도 제공한다. 기존 class에서 `btn-` 뒤에 `outline`을 추가하면 된다.

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
```

### Button Size

기존의 클래스 하위에 `btn-lg` 또는 `btn-sm`을 추가하면 Button Size를 크게 또는 작게 할 수 있다.

```html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
```

### Disabled state

disabled 속성을 추가함으로써 해당 버튼을 비활성화할 수 있다.

```html
<button type="button" class="btn btn-primary" disabled>Primary button</button>
```

<br>

# 드롭다운과 리스트

## 드롭다운(Dropdowns)

아래쪽으로 내려오면서 메뉴가 보이는 요소, 메뉴를 보이게하고 숨기는 토글버튼이 함께 제공된다.

```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

### Split button

`dropdown-toggle-split` 속성을 추가하면 토글 버튼과 텍스트 영역을 분리하여 나타낼 수 있다.

또 드롭다운 메뉴의 리스트에 `<hr class="dropdown-divider">`를 추가하면 메뉴들 사이를 구분하는 선을 추가할 수 있다.

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Action</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <!--divider-->
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## 리스트(list-group)

item의 목록(list)을 나타낼 수 있는 요소를 제공한다.

```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
```

### Active items  
클래스에 `.active`를 추가하면 현재 활성화되어있는 항목을 표시할 수 있다.  

### Disabled items  
클래스에 `.disabled`를 추가하면 해당 항목을 비활성화할 수 있다.  

### Links and buttons  
클래스에 `.list-group-item-active`를 추가하면 hover 효과를 줄 수 있다.  
      
<br>

# 양식  
정보를 입력 받아 제출하는 형태의 UI를 form이라고 한다.  

## Form controls  
컨트롤의 클래스에 `.form-control`을 추가하면 bootstrap에서 제공하는 스타일을 적용할 수 있다.

### Sizing
컨트롤의 클래스에 `.form-control-lg`를 추가하면 크기를 크게, `.form-control-sm`을 추가하면 작게, 아무 것도 추가하지 않으면 보통으로 크기를 적용할 수 있다.

### Disabled and Readonly
컨트롤의 클래스에 `.disabled`를 추가하면 컨트롤을 비활성화, `.readonly`를 추가하면 읽기 전용으로 적용할 수 있다.

### File input
파일을 업로드할 수 있는 UI가 제공된다.  
```html
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
```
## Input group
여러 가지 input들을 조합하여 다양한 UI를 만들 수 있다.

<br>

# 모달
