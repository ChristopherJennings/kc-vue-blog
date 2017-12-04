<template>
  <div>
    <slot name="hero"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <slot/>
          </div>
          <div class="column is-one-quarter">
            <div class="box">
              <aside class="menu">
                <p class="menu-label">Categories</p>
                <ul class="menu-list">
                  <li><a>Category</a></li>
                  <li><a>Category</a></li>
                  <li><a>Category</a></li>
                  <li><a>Category</a></li>
                  <li><a>Category</a></li>
                </ul>
                <p class="menu-label">Archive</p>
                <ul class="menu-list">
                  <li><a>Post</a></li>
                  <li><a>Post</a></li>
                  <li><a>Post</a></li>
                  <li><a>Post</a></li>
                  <li><a>Post</a></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
