<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron, DropdownDivider } from 'flowbite-svelte'
</script>
<Navbar>
  <div class="container">
    <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <NavLi href="/" active={true}>Home</NavLi>
    <NavLi id="nav-menu1" class="cursor-pointer navitem"><Chevron aligned>FUNdamentals</Chevron></NavLi>
    <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
      <NavLi href="/colors" class="navitem">Colors</NavLi>
      <NavLi href="/happyfaces" class="navitem">Happy Faces</NavLi>
      <NavLi href="/stickycircle" class="navitem">Sticky Circle</NavLi>
    </Dropdown>
</div>
</Navbar>
<style>
	nav {
	}

	.container {
		display: flex;
		align-items: center;
		background-color: #212529;
		color: white;
	}

	.navitem {
		color: #aaa;
		text-decoration: none;
	}

	.active {
		color: white;
	}

	ul {
		display: flex;
		list-style: none;
		margin-left: auto;
		font-size: 1em;
	}
	li {
		margin-right: 20px;
	}

	h1 {
		margin: 0;
		font-size: 1.1em;
		font-weight: normal;
	}
</style>